import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Parser } from 'json2csv';
import * as csvtojson from "csvtojson";
import * as fs from 'fs';

@Injectable()
export class EmailsService {
    public generateCsvFile(
        data: Record<string, unknown>,
        fieldList: string[],
    ): string {

        if (data.length === 0) return;
        const opts: { fields: string[], header?: boolean } = { fields: fieldList, header: false };
        try {
            const parser = new Parser(opts);
            const csv = parser.parse(data);
            return csv + '\n';
        } catch (err) {
            console.error(err);
        }
    }


    async filter(file: Record<string, string>, res: Response) {
        const filePath = `./uploads/${file.ts + file.originalname}`;
        const readStream = fs.createReadStream(filePath);
        let headers: string[] = [];

        csvtojson().fromStream(readStream).subscribe((line) => {

            if (!headers.length) {
                headers = Object.keys(line);
                res.write(headers + '\n');
            }
            if (!line.email.toString().endsWith('@yahoo.com')) {
                res.write(this.generateCsvFile(line, headers));
            };

        }) 
        .on("done", () => {
            fs.unlinkSync(filePath);
        })
        .on("error", (err) => {
                console.log(err);
        })
    };
}
import * as keyModel from '../models/keyword';

export function getKeyword(req,res) {
    keyModel.getKeyword().then(([row]) => {
        res.status(200).json(row);
    })
}

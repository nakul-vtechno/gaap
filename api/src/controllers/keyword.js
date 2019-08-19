import * as keyModel from '../models/keyword';

export function getKeyword(req,res) {
    keyModel.getKeyword()
    .then(([row]) => {
        res.status(200).json(row);
    })
}

export function getKeywordByID(req,res) {
    console.log("req & res => ", req.params);
    keyModel.getKeywordByID(req.params.userName).then(([row]) => {
        res.status(200).json(row);
    })
}




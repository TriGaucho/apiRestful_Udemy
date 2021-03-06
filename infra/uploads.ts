import * as multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, callBack){
        callBack(null, '/uploads')
    },
    filename: function (req, file, callBack){
        callBack(null, file.originalname)
    }
})

const uploads= multer( { storage: storage })

export default uploads
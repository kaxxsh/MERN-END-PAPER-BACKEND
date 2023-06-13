import mongoose from 'mongoose';

const handlemongoDB = (Url) =>{
    mongoose.connect(Url)
}

export default handlemongoDB;
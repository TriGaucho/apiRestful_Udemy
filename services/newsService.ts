import NewsRepository from "../repository/newsRepository"

class NewService{
    get(){
        // retorna uma Promise
        return NewsRepository.find({})
    }

    getById(_id){
        // retorna uma Promise
        return NewsRepository.findById(_id)
    }

    create(news){
        // retorna uma Promise
        return NewsRepository.create(news)
    }

    update(_id, news){
        // retorna uma Promise
        return NewsRepository.findByIdAndUpdate(_id, news)
    }

    delete(_id){
        // retorna uma Promise
        return NewsRepository.findByIdAndRemove(_id)
    }
}

export default new NewService()
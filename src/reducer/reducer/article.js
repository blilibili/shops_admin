import {requestGetArticleList} from '../../service/article/article'

export default (state = [] , action) => {
    switch (action.type) {
        case "GET_ARTICLE_LIST":
            requestGetArticleList();
            break;
        default:
            return []
    }

    return state;
}

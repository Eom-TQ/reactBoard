import api from '../ax/axiosSettings'

export const boardList = (obj) => {
    return api.get('/board/list', { params: obj }

    );
}

export const boardRegist = (obj) => {
    return api.post('/board/regist', JSON.stringify(obj));
}

export const boardFind = (obj) => {
    return api.get('/board/find', { params: obj });
}

export const boardGood = (obj) => {
    return api.post('/board/good', JSON.stringify(obj));
}

export const boardModify = (obj) => {
    return api.post('board/modify', JSON.stringify(obj));
}
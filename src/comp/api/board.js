import api from '../ax/axiosSettings'

export const boardList = (obj) => {
    return api.get('/board/list', { params: obj }

    );
}

export const boardRegist = (obj) => {
    return api.post('/board/regist', JSON.stringify(obj));
}
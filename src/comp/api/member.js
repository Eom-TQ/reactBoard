import api from '../ax/axiosSettings'

export const memberLogin = (obj) => {
    return api.post('/member/login', JSON.stringify(obj)

    );
}

export const memberIdCheck = (obj) => {
    return api.post('/member/findId', JSON.stringify(obj)

    );
}

export const memberRegist = (obj) => {
    return api.post('/member/regist', JSON.stringify(obj));
}
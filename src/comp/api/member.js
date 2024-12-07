import api from '../ax/axiosSettings'

export const memberLogin = (obj) => {
    return api.post('/member/login', JSON.stringify(obj)

    );
}
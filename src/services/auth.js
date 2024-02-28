
export const userLogin = async (payload) => {
    const { email, password } = payload?.payload
    const url = 'google.com'
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if(response.status === 200){
        // toast.success('Login Successfully')
        // setDataInLocalStorage('userInfo',data?.payload)
        // Cookies.set('auth_token', data?.payload?.token)
    }
    else{
        // toast.error(data?.message)
    }
    return data;
}
export const userRegister = async (payload) => {
    const { email, password } = payload?.payload;
    const url = 'google.com'
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if(response.status === 200){
        // toast.success('Register Successfully')
        // setDataInLocalStorage('userInfo',data?.payload)
    }
    else{
        // toast.error(data?.message)
    }
    return data;
}
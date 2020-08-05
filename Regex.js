export const isEmailValidRegex = (email) => {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regx.test(email)
}

export const isAgeValidRegex = (age) => {
    const regx = /^(1[3-9]|[2-9][0-9]|1[01][0-9]|120)$/
    return regx.test(age)
}
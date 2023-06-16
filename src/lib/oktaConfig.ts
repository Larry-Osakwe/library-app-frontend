export const oktaConfig = {
    clientId: '0oa9zkx613Q6zE5PY5d7',
    issuer: 'https://dev-77885586.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}
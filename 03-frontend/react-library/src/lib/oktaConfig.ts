export const oktaConfig = {
    clientId: '0oafss4ymnLUTWl2F5d7',
    issuer: 'https://dev-71339698.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
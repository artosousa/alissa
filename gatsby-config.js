module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Alissa Bell',
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1Z6GPsfpmBoO4YJeea5E2DKdczdMDdZEMxDEIvEQh3hc",
        credentials: {
          private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCovDKmc7Gy3C0d\nzcqhXi6YQdLzou8YaUWqu6YnSU9CABI+6Q1pq0pDC/EarSAncPT/rs4SOYIP7joB\nlAoJ4eeo8IlfDoqCyr3881YMwX+1DUVXQTzGn+/Y/qPFzW01kUoWBJO6E3iKLgcv\n464zm8tDr4xabN5H/fbAFkoBZXSlXWeSOnBufWIvCeoNOJEynFNRwM0ocpkUAjMe\nkr8aOSdgTdgz3Z/xKtb1r/+0+yzea/LdQNNXByDVQSlCsNxPUkzmF5jE1kfuTMMa\n5fTPMQy9jA/rFWmg2zKyCMNPY529KlJJnr1YjCc8SiqSlrz/wvLzV+ZPJm74tY/3\nUMIQC6tFAgMBAAECggEADknnmSBdeSm7eVVitiEJXZPfZwnSaPULNP7Qfm2vFEX4\nxZKLM/pRHtXdTDbCbQyb9qXpJfJwQOSZzWXpprYWXcBGxcGvuY0tIwVBMXHWXHDc\nARxRZvmGwE+p8zdm6t0bkrs+/kglUkA9FBFaAF1OTHRKdKLY/Ow078XDbRRYGSOp\nTRjbanIgqE5+6W+sQxMrE5LC7ZKvL++a5aFS+4gbiz4GYuvIYQ0uGoUxHb/iOKKK\nGsQBE7sKIJV8BgNNIqHqKV3WNFWFkTUXb03ZHVtdzLzcEHcIfaOQsRIGsxYgX5aA\n5kFX8jGtvzY5Vur89rdDLYAA+rt+Zr3A/CjP7d/ocQKBgQDQGqmfVtzxSVJhVYqM\ne3YF0X4JjVuCLNIZhkiIWkHosYfBFUVGcxDgmvR4QOtQqZY7BhSQKCwd1d2Uov66\nN0XEbmkYobIL6d7B5uuCi2PfK/7fZ/Iy80GjoevzCR9ImnGwIG3WqM1uViVWAuRs\nBf1lWUPPNFRdEMu4hn70oKsNUQKBgQDPkfGX2EGP4xGrhjzqGXyUHLZKx9dFR4lG\nBFurDqgHF/dKqKMy7O7n8Q/v+4pd02ZpSBnsFQeltYtKv+bCNT7tFU1CTlptmDSj\nQZict2ZODK7z9DpWXy3nRuE3Cv0Z1udWvaqfyST05M631we9WyNNVUr+y7wqFt1j\nVwsRCfLxtQKBgQCmaIu3BMjMkSs09ihCSf+Ii4rTrJu+LoUbMAwULMiDgGLj/VRW\nD3ExifdvqcoByHp/XE9ZLyaH/Rqg3u3+jnBVsUyNC8/KQwuD1loBG+GS9iVrFD3S\njD6y0KpSv7qqXgYHJwduHbGYR363lrx9vRRx1L2qlVfYy7N8LOCcUVY24QKBgAn6\n22HQnP5dDYlwr9cVmJ7Kbp1T1G7ZTKlYJkwoLT4CEfq99vLI34e5WGnSb0mpk1/2\nfoCSVkbKXsMeTOsDgl4Fyywn9kMUsVs0GTFXxAx2oabLFE74zo0zJDrwRVELux25\nis2Z7zPzGFlQdmfNTPo34p4zj316kfRnx/luwAaNAoGBAJw0S4Ggi1+PQNL0T2g+\n/gBruXx/JKro0JPT98Yey/1lj+BVLIdLWuFXEXuWIHhcBru58t49+wCgpY6l7AQh\n5FnaP9vTj8zAT/3gW7yMy9MeXe3QoMAubp7Un4IZfHVmnH5PJt0p1vu5A2FA+jTh\nCUJVXHJ4QV6wcdPo4so4HrAY\n-----END PRIVATE KEY-----\n",
          client_email: "card-editor@alissa-bell.iam.gserviceaccount.com"
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Cormorant Garamond`
        ],
        display: 'swap'
      }
    }
  ],
};



const url = 'https://api.coincap.io/v2'

export const getAssets = () => {
  return fetch(`${url}/assets?limit=10`)
    .then(res =>res.json())
    .then(res => res.data)
}


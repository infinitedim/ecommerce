# E-Commerce

Monthly project from genbox bootcamp

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Features

- Login/Signup
- Shopping History
- Cart
- Wishlist

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MySQL

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Authors

- [infinitedim](https://www.github.com/infinitedim)
- [ramirezabd](https://www.github.com/ramirezabd)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)

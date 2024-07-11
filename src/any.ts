import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axios.get(url).then(function (response) {
//   const data: any = response.data;
//   console.log(data);
// });

// レスポンスが何が返すか分からないので、any型を使う

// 以下のように、型を指定することもできる
axios.get(url).then(function (response) {
  interface Articles {
    id: number;
    title: string;
    description: string;
  }

  //   interface Articles {
  //     data: Article[];
  //   }

  const data: Articles = response.data;
  console.log(data);
});

// 以下はエラーの例
// axios.get(url).then(function (response) {
//   interface Article {
//     id: number;
//     title: string;
//   }

//   interface Articles {
//     data: Article[];
//   }

//   const data: Articles = response.data;
//   console.log(data);
//   console.log(data.data[0].id);
// });

// 上記のエラーの原因は、dataの型がArticlesであるため、data.data[0].idとするとエラーになる。

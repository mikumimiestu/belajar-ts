interface ResponseData<T> {
  status: number;
  data: T;
}

const userResponse: ResponseData<string> = {
  status: 200,
  data: "Berhasil ambil data user"
};

const nilaiResponse: ResponseData<number> = {
  status: 200,
  data: 95
};

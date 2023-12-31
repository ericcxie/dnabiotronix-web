function encode(data: { [key: string]: string }) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const handleSubmit = (name: string, data: { [key: string]: string }) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": name,
      ...data,
    }),
  }).catch((error) => alert(error));
};

export default handleSubmit;

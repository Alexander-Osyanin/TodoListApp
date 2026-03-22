import { useState } from "react";

export function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  function handleChange(element) {
    setForm({ ...form, [element.target.name]: element.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {};
    if (form.name === "") newErrors.name = "Введите имя";
    if (!form.email.includes("@")) newErrors.email = "Введите корректный email";
    if (form.password.length < 6)
      newErrors.password = "Ваш пароль меньше 6 символов";
    if (Object.keys(newErrors).length === 0) {
      console.log(form);
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    } else {
      console.log(newErrors);
      setErrors(newErrors);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type="text"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button>Зарегистрироваться</button>
    </form>
  );
}

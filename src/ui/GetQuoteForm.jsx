import { useForm } from "react-hook-form";
import styles from "./GetQuoteForm.module.css";
import { SERVICES_LIST, SOURCES_LIST } from "../utils/constants";

function GetQuoteForm({ close }) {
  const { register, reset, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
    close?.();
  }

  return (
    <div className={styles.formContainer}>
      <span className={styles.formHeading}>Get a Free Quote</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          required
          {...register("fullName")}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          {...register("email")}
        />
        <input
          type="text"
          placeholder="Tel. Number"
          required
          {...register("telephone")}
        />
        <input
          type="text"
          placeholder="Location"
          required
          {...register("location")}
        />

        <select {...register("service")}>
          {SERVICES_LIST.map((val, i) => (
            <option value={val} key={i}>
              {val}
            </option>
          ))}
        </select>

        <select {...register("source")}>
          {SOURCES_LIST.map((val, i) => (
            <option key={i}>{val}</option>
          ))}
        </select>

        <textarea placeholder="Message" {...register("message")}></textarea>

        <button className={styles.btnContact}>Contact Us</button>
      </form>
    </div>
  );
}

export default GetQuoteForm;

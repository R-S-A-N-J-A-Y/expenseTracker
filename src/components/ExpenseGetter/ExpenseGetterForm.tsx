import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Categories from "../Categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name of product must be 3 letter." })
    .max(50, { message: "Name cannot be more than 50 letters." }),
  amount: z
    .number({ invalid_type_error: "Amount is Required." })
    .min(0, { message: "amount cannot be zero" }),
  category: z.enum(Categories, {
    errorMap: () => ({message: "Category is Required."})
  }),
});

type formData = z.infer<typeof schema>;

interface Props {
  onClick: (data: formData) => void;
}

const ExpenseGetterForm = ({ onClick }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onClick(data);
        reset();
      })}
    >
      <div className="m-3">
        <label className="form-label" />
        Description
        <input
          {...register("description")}
          type="text"
          className="mt-2 form-control"
          id="exampleFormControlInput1"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="m-3">
        <label className="form-label" />
        Amount
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="mt-2 form-control"
          id="exampleFormControlInput1"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="m-3">
        <label className="form-label" />
        Category
        <select
          {...register("category")}
          className="mt-2 form-select"
          aria-label="Default select example"
        >
          <option defaultValue={"Select the Option"} value=""></option>
          {Categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary m-3">
        Submit
      </button>
    </form>
  );
};

export default ExpenseGetterForm;

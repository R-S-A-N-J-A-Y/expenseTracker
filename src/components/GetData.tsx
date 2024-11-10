import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Name of product must be 3 letter." }),
  amount: z
    .number({ invalid_type_error: "Amount cannot be empty." })
    .min(0, { message: "amount cannot be zero" }),
  category: z.string(),
});

type formData = z.infer<typeof schema>;

interface Props {
  len: number,
  onClick: (data: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }) => void;
}

const GetData = ({ len, onClick }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<formData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const data1 = {...data, id: len+1}
        onClick(data1);
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
          <option defaultValue={"Select the Option"} value="0"></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <button disabled={!isValid} type="submit" className="btn btn-primary m-3">
        Submit
      </button>
    </form>
  );
};

export default GetData;

import Button from "@/app/ui/button";
import Input from "@/app/ui/input";

export default function ContactForm({ label }) {
  return (
    <div className="rounded-lg max-w-[500px] p-10 bg-white shadow-lg drop-shadow-md">
      <div className="">
        <form>
          <h1 className="small-heading text-center">{label}</h1>
          <div className="flex justify-center items-center gap-5 my-5">
            <Input
              id={"first_name"}
              name={"first_name"}
              placeholder={"First Name"}
            />
            <Input
              id={"last_name"}
              name={"last_name"}
              placeholder={"Last Name"}
            />
          </div>
          <div className="space-y-5">
            <Input
              type={"number"}
              id={"phone"}
              name={"phone"}
              placeholder={"Phone"}
            />
            <Input
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={"email"}
            />
            <Input
              id={"speciality"}
              name={"speciality"}
              placeholder={"Speciality"}
            />
            <Input
              id={"message"}
              name={"message"}
              placeholder={"Type your challange"}
              textarea
            />
          </div>
          <div className="my-5">
            <Button btnText={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}

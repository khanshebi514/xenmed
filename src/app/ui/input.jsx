export default function Input({ type='text', id, name, placeholder, textarea, ...props }) {
  return (

    textarea ? <textarea placeholder={placeholder} id={id} name={name} className="border-2 outline-primary-bg py-2 px-3 rounded-lg text-sm w-full"/>
    :
    <input
      className="border-2 outline-primary-bg py-2 px-3 rounded-lg text-sm w-full"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      {...props}
    />
  );
}

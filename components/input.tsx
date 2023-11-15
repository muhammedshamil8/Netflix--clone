import React from "react"
interface InputPropes {
    id: string;
    onChange: any;
    value: string;
    type: string;
    label: string;
}
const Input: React.FC<InputPropes> = ({
    id,
    onChange,
    value, 
    type,
    label
}) => {

    return(
        <div className="relative">
<input 
id={id}
value={value}
onChange={onChange}
type={type}
className="
block
pt-6
px-6
pb-1
text-md
text-white
w-full
bg-neutral-700
rounded-md
focus:outline-none
focus:ring-0
appearance-none
peer

"
placeholder=""
/>
<label
className="
absolute
text-md
text-zinc-400
duration-150
transform
-translate-y-3
scale-75
top-4
z-10
origin-[0]
left-6
peer-placeholder-shown:scale-100
peer-placeholder-shown:translate-y-0
peer-focus:scale-75
peer-focus:-translate-y-3
"
htmlFor="email"
>
    {label}
</label>
        </div>
    )
}
export default Input ;
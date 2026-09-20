"use client"

export default function PrimaryButton({text}: {text:string}){
    return(
        <button onClick={ ()=> {alert("Primary Button")} } className="py-2 px-5 bg-[#A8461E] text-[#F7F5EF] cursor-pointer">
            {text}
        </button>
    )
}
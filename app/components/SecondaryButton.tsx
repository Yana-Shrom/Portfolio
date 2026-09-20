"use client"

export default function SecondaryButton({text}: {text:string}){
    return(
        <button onClick={ ()=> {alert("Secondary Button")} } className="py-2 px-5 bg-[#1A1912] text-[#F7F5EF] cursor-pointer">
            {text}
        </button>
    )
}
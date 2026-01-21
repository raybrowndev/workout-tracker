import React from 'react'

//define the props you will pass 
type HeaderProps = {
  title: string; 
  name: string;
  children?: React.ReactNode
};

export const LargeHeader = ({ title, name, children }: HeaderProps) =>{
  return(
    <header className="mb-4">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl text-pink-400 font-semibold">Hey {name}, <span className="text-xl text-blue-400 font-semibold">{children}</span></p>
    </header>
  )
}


export const Headers = ({ title, children }: HeaderProps) => {
  return (
    <div className="mb-4">
      <h1 className="text-5xl font-bold">{title}</h1>
      {children}
    </div>
  )
}


export const BasicText: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <p className="text-xl leading-relaxed tracking-normal">{title}</p>
    </div>
  )
}

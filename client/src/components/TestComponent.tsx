import { useEffect, useState } from "react";
import useJsonFetch from "../hooks/useJsonFetch";

type TestComponentProps = {
    url:string
}
const TestComponent = (props: TestComponentProps) => {
    const [{data,isLoading,error}] = useJsonFetch(props.url);
    
    //useEffect(() => setState(data),[data]);
    
    return (
    <>
    <p>{!!isLoading ? "Загрузка" : (!!error) ? error : data?.status}</p>
    </>
  )  
}

export default TestComponent;
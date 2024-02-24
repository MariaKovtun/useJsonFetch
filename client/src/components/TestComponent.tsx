import { useEffect, useState } from "react";
import useJsonFetch from "../hooks/useJsonFetch";

type TestComponentProps = {
    url:string
}
const TestComponent = (props: TestComponentProps) => {
    const [state,setState] = useState<{status: string}>();
    const [{data,isLoading,error}] = useJsonFetch(props.url);
    
    useEffect(() => setState(data),[data]);
    
    return (
    <>
      <div>
        {state?.status}
      </div>
    </>
  )
    
}

export default TestComponent;
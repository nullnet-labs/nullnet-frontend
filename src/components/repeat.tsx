import { Fragment } from "react";

type RepeatProps = {
    children: ReactNode,
    x?: number
}

export default function Repeat({ children, x = 2 }: RepeatProps) {    
    const repetitions:number = x < 1 ? 1 : x;

    return (
        <>
            {
                Array.from({ length: repetitions }, (value, iteration) => (
                    <Fragment key={iteration}>
                        {children}
                    </Fragment>
                ))
            }
        </>
    );
};

interface Props {
    obj: {
        num: number
    }
}

export const Renderer = ({ obj }: Props) => {
    return (<div>{obj.num}</div>)
}
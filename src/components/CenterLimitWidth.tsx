import classNames from 'classnames';

type Props = {
    children: React.ReactNode,
    maxWidth?: string;
    noPadding?: boolean;
    containerClassName?: string;
};

export function CenterLimitWidth(props: Props) {
    const { maxWidth = 'lg:max-w-4xl' } = props;
    return (
        <div className="flex justify-center w-full">
            <div className={classNames('flex flex-col w-full', maxWidth)}>
                <div className={classNames({ "px-4 lg:px-8 5xl:px-0": !props.noPadding }, props.containerClassName)}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

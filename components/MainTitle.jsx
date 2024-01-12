import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link';

export default function MainTitle({
    title,
    description,
    button,
    buttonLink,
    buttonText,
    buttonColor,
}) {
    return (
        <>
            <div className="py-6 flex justify-between">
                <div>
                    <h1 className="text-blueGray-900 text-2xl font-semibold">
                        {title}
                    </h1>
                    <p className="pt-1 text-cyan-900">
                        {description}
                    </p>
                </div>
                {button && (
                    <Button
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        onClick={() => getJobs(compId.companyId)}
                        className={`bg-${buttonColor}-200 text-black hover:bg-${buttonColor}-500 hover:text-white`}
                    >
                        {buttonText}
                    </Button>
                )}
            </div>
        </>
    );
}

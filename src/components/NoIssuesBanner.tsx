import successBanner from '../../public/successbanner.svg'
import Image from 'next/image';
interface Props {
    isSuccess: boolean,
    url?: string
}
function NoIssuesBanner({isSuccess, url}: Props) {
    return (
        isSuccess &&
        <div className='mx-auto max-h-[50vh] max-w-screen-sm md:max-w-screen-md border mt-4 border-orange-500 shadow-2xl rounded-md '>
            <div className="flex gap-x-2 mr-2">
                <div className="relative">
                    <Image
                    className='min-w-40 max-w-48 sm:max-w-xs border-r max-h-[50vh] p-3 bg-gray-800 rounded-l-sm'
                    priority
                    src={successBanner}
                    alt='Succss Banner for accessibility issue check'
                    />
                </div>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-xl md:text-2xl font-semibold">Congratulations!!</div>
                    <div className="text-sm text-wrap md:text-lg">There are no Accessibility issues on the page</div>
                    <div className='text-xs text-gray-400 mt-3 cursor-pointer hover:rounded-3xl hover:bg-gray-100 p-2 text-pretty-wrap break-all'>
                        <a href={url}>{url}</a></div>
                </div>
            </div>
        </div>
    )
}

export default NoIssuesBanner;
"use client"
interface Prop {
    isLoading: boolean
}
function LoadingComponent({isLoading}: Prop) {
    return (
        isLoading &&
        <div className="mx-5 my-2 animate-pulse">
            <div className="rounded-md border-2 border-gray-800 p-1  overflow-hidden">
                <div className="flex h-16 flex-col items-center justify-center space-y-2 rounded-t-md bg-gray-200">
                    <div className="flex items-center justify-center">
                        <span className="text-gray-400"> + </span>
                        <div className="ms-2 h-4 w-48 rounded-md border bg-gray-300"></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="text-gray-400"> ↑ </span>
                        <div className="ms-2 h-4 w-48 rounded-md border bg-gray-300"></div>
                    </div>
                </div>
                <div className="my-2 flex space-x-2">
                    <div className="w-full space-y-2.5 bg-gray-50 max-w-[50%]">
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="flex items-center space-x-2">
                            <div className="h-2.5 w-[100px] md:w-[150px] rounded-md border bg-red-200"></div>
                            <div className="h-2.5 w-[80px] md:w-[100px] rounded-md border bg-red-300"></div>
                            <div className="h-2.5 w-full rounded-md border bg-red-200"></div>
                        </div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="flex items-center space-x-2">
                            <div className="h-2.5 w-[250px] rounded-md border bg-red-200"></div>
                            <div className="h-2.5 w-[280px] rounded-md border bg-red-300"></div>
                            <div className="h-2.5 w-full rounded-md border bg-red-200"></div>
                        </div>
                    </div>
                    <div className="w-full space-y-2.5 bg-gray-50 max-w-[50%]">
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="flex items-center space-x-2">
                            <div className="h-2.5 w-[150px] rounded-md border bg-green-200"></div>
                            <div className="h-2.5 w-[250px] rounded-md border bg-green-300"></div>
                            <div className="h-2.5 w-full rounded-md border bg-green-200"></div>
                        </div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="h-2.5 w-full rounded-md border bg-gray-200"></div>
                        <div className="flex items-center space-x-2">
                            <div className="h-2.5 w-[150px] rounded-md border bg-green-200"></div>
                            <div className="h-2.5 w-[100px] rounded-md border bg-green-300"></div>
                            <div className="h-2.5 w-full rounded-md border bg-green-200"></div>
                        </div>
                    </div>
                </div>
                <div className="flex h-16 flex-col items-center justify-center space-y-2 rounded-b-md bg-gray-200">
                    <div className="flex items-center justify-center">
                        <span className="text-gray-400"> + </span>
                        <div className="ms-2 h-4 w-48 rounded-md border bg-gray-300"></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="text-gray-400"> ↓ </span>
                        <div className="ms-2 h-4 w-48 rounded-md border bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoadingComponent
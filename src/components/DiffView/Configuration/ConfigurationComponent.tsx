import { Settings2 } from 'lucide-react'
import {
    useConfiguration,
    useSwitchViewType,
    usechangeLanguage,
    useSwitchEditsType,
    useSwitchGutterVisibility,
} from '../context/configuration';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";
function ConfigurationComponent() {

    const configuration = useConfiguration();
    const switchViewType = useSwitchViewType();
    const changeLanguage = usechangeLanguage();
    const switchEditsType = useSwitchEditsType();
    const switchGutterVisibility = useSwitchGutterVisibility();


    return (
        <span className='flex justify-end mr-3'>
            <Dialog>
                <DialogTrigger asChild>
                    <Settings2 className='cursor-pointer bg-gray-100 hover:bg-gray-200 p-4' width={50} height={50}/>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">
                            Diff Options
                        </DialogTitle>
                        <DialogDescription>
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col justify-start items-start mx-4 gap-2">
                                    <div className="text-md">View Mode</div>
                                    <div className="hidden sm:text-xs sm:block">
                                        View diff in two columns or a unified column
                                    </div>
                                </div>
                                <div className="flex mr-2">
                                    <ToggleGroup type="single" value={configuration.viewType} onValueChange={switchViewType}>
                                        <ToggleGroupItem value="split" className="text-xs">
                                            Split
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="unified" className="text-xs">
                                            Unified
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                </div>
                            </div>
                            <div className="bg-gray-300 h-[2px] rounded-md mt-4"></div>
                        </DialogDescription>

                        <DialogDescription>
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col justify-start items-start mx-4 gap-2">
                                    <div className="text-md">Mark Edits</div>
                                    <div className="hidden sm:text-xs sm:block">
                                        Edits by block usually performs better
                                    </div>
                                </div>
                                <div className="flex mr-2">
                                    <ToggleGroup type="single" value={configuration.editsType} onValueChange={switchEditsType}>
                                        <ToggleGroupItem value="none" className="text-xs">
                                            None
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="line" className="text-xs">
                                            Line
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="block" className="text-xs">
                                            Block
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                </div>
                            </div>
                            <div className="bg-gray-300 h-[2px] rounded-md mt-4"></div>
                        </DialogDescription>

                        <DialogDescription>
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col justify-start items-start mx-4 gap-2">
                                    <div className="text-md">Show Line Number</div>
                                    <div className="hidden sm:text-xs sm:block">
                                        Choose to show or hide line number
                                    </div>
                                </div>
                                <div className="flex mr-2">
                                    <Switch checked={configuration.showGutter} onCheckedChange={switchGutterVisibility}/>
                                </div>
                            </div>
                            <div className="bg-gray-300 h-[2px] rounded-md mt-4"></div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </span>
    );
}

export default ConfigurationComponent
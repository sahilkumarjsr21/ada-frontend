// "use client"
import { Settings, Settings2Icon, SettingsIcon, Wrench } from "lucide-react";
import Accordian from "./Accordian"
import { ChangeEvent, FormEvent, useCallback, useState, useTransition } from "react"
import SearchComponent from "./SearchComponent";
import CheckBox from "./CheckBox";
import RulesModalComponent from "./RulesModalComponent";



function HeroComponent() {
    return (
        <div className='overflow-clip'>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
                        Accessibility with <span className="bg-gray-900 text-white rounded-sm px-2">Gen AI</span>
                    </h1>
                    <p className="mt-5 text-gray-600 dark:text-gray-400">
                        Transforming ADA Compliance Effortlessly
                    </p>
                    <div className="flex mt-7 sm:mt-12 justify-center gap-x-3">
                    <div className='shadow-lg max-w-xl md:max-w-2xl w-full lg:max-w-4xl rounded-md'>
                        <SearchComponent/>
                    </div>
                  <RulesModalComponent/>  
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroComponent
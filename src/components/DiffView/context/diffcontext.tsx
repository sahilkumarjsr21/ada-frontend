"use client"
import { Row } from "@tanstack/react-table";
import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
export interface AiResponse {
    comments: Array<string>, diff: string, originalHtml: string
}
export interface DiffContextValue {
    isLoading: boolean,
    aiResponse: AiResponse | undefined,
    selectedRows: Row<any>[]
    isRulesEnabled: boolean
    url: string
    updateIsLoading: (value: boolean) => void
    updateAiResponse: (value: AiResponse) => void
    updateSelectedRows: (value: any) => void
    updateEnableRule: (value: boolean) => void
    updateUrl: (value:string) => void
}

const DEFAULT_VALUE: DiffContextValue = {
    isLoading: false,
    aiResponse: { comments: [], diff: '', originalHtml: '' },
    selectedRows: [],
    url: "",
    isRulesEnabled: false,
    updateIsLoading: () => { },
    updateAiResponse: () => { },
    updateSelectedRows: () => { },
    updateEnableRule: () => {},
    updateUrl: () => {},
}

const Context = createContext(DEFAULT_VALUE);
Context.displayName = "DiffContext"

interface Props {
    children: ReactNode
}
export function DiffContextProvider({ children }: Props) {
    const [isLoading, setIsLoading] = useState(DEFAULT_VALUE.isLoading);
    const [aiResponse, setAiResponse] = useState(DEFAULT_VALUE.aiResponse);
    const [selectedRows, setSelectedRows] = useState(DEFAULT_VALUE.selectedRows)
    const [isRulesEnabled, setRulesEnabled] = useState(DEFAULT_VALUE.isRulesEnabled)
    const [url, setUrl] = useState(DEFAULT_VALUE.url)

    const updateIsLoading = useCallback((value: boolean) => setIsLoading(value), [])
    const updateAiResponse = useCallback((value: AiResponse) => setAiResponse(value), [])
    const updateSelectedRows = useCallback((value: any) => setSelectedRows(value), [])
    const updateEnableRule = useCallback((value: boolean) => setRulesEnabled(value), [])
    const updateUrl = useCallback((url:string) => setUrl(url), [])


    const contextValue = useMemo(() => ({ isLoading, aiResponse, selectedRows, isRulesEnabled, url, updateAiResponse, updateIsLoading, updateSelectedRows, updateEnableRule, updateUrl }),
        [isLoading, aiResponse, selectedRows, isRulesEnabled, url, updateAiResponse, updateIsLoading, updateSelectedRows, updateEnableRule, updateUrl]);

    return (<Context.Provider value={contextValue}>{children}</Context.Provider>)
}

function createContextHook<K extends keyof DiffContextValue>(name: K) {
    return (): DiffContextValue[K] => {
        const context = useContext(Context)
        return context[name];
    }
}

export const useIsLoading = createContextHook('isLoading')
export const useAiResponse = createContextHook('aiResponse')
export const useSelectedRows = createContextHook('selectedRows')
export const useIsRuleEnabled = createContextHook('isRulesEnabled')
export const useUrl = createContextHook('url')
export const useUpdateAiResponse = createContextHook('updateAiResponse')
export const useUpdateIsLoading = createContextHook('updateIsLoading')
export const useUpdateSelectedRows = createContextHook('updateSelectedRows')
export const useUpdateIsRuleEnabled = createContextHook('updateEnableRule')
export const useUpdateUrl = createContextHook('updateUrl')



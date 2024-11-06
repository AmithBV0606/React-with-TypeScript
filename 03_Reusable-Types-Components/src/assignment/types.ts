type Info = {
    id: number;
    name: string;
    email: string
}

type AdminsInfoList = Info & {role: string, lastlogin: Date}

export {type Info, type AdminsInfoList}
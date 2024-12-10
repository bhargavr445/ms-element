export interface PrrI {
    created:           number;
    d1:                string;
    d2:                string;
    dir:               string;
    files:             File[];
    files_count:       number;
    item_last_updated: number;
    item_size:         number;
    metadata:          Metadata;
    reviews:           Review[];
    server:            string;
    uniq:              number;
    workable_servers:  string[];
}

export interface File {
    name:       string;
    source:     Source;
    format:     string;
    original?:  string;
    mtime?:     string;
    size?:      string;
    md5:        string;
    crc32?:     string;
    sha1?:      string;
    filecount?: string;
    btih?:      string;
    summation?: string;
    rotation?:  string;
}

export enum Source {
    Derivative = "derivative",
    Metadata = "metadata",
    Original = "original",
}

export interface Metadata {
    identifier:          string;
    mediatype:           string;
    description:         string;
    language:            string;
    scanner:             string;
    title:               string;
    publicdate:          Date;
    uploader:            string;
    addeddate:           Date;
    "identifier-access": string;
    "identifier-ark":    string;
    ppi:                 string;
    ocr:                 string;
    repub_state:         string;
    creator:             string;
    subject:             string[];
    curation:            string;
    collection:          string[];
    backup_location:     string;
    openlibrary_edition: string;
    openlibrary_work:    string;
}

export interface Review {
    reviewtitle:       string;
    reviewbody:        string;
    stars:             string;
    reviewer:          string;
    reviewdate:        Date;
    createdate:        Date;
    reviewer_itemname: string;
}

import { Task } from './../models/task.model';

type Action =
    | { type: "LOADING" }
    | { type: "SUCCESS", results: Task[] }
    | { type: "FAILURE", error: string };

type State = {
    isLoading: boolean,
    error?: boolean,
    data?: Task[],
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "LOADING":
            return { isLoading: true };
        case "SUCCESS":
            return { isLoading: false, data: action.results };
        case "FAILURE":
            return { isLoading: false, error: true };
    }
}
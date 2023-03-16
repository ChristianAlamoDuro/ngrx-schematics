import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
    get<%=classify(entity)%>,
    get<%=classify(entity)%>Successfully
} from './<%=entity%>.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface <%=classify(entity)%>State extends EntityState<<%=classify(entity)%>> {
    loading: boolean;
    loadingMessage: string;
}

// Entity Adapter
export const <%=entity%>Adapter: EntityAdapter<<%=classify(entity)%>> = createEntityAdapter<<%=classify(entity)%>>();

export const initialState: <%=classify(entity)%>State = <%=entity%>Adapter.getInitialState({
    loading: false,
    loadingMessage: ''
});

const <%=entity%>Reducer = createReducer(
    initialState,
    on(get<%=classify(entity)%>, state => ({ ...state, loading: true })),
    on(get<%=classify(entity)%>Successfully, (state, { <%=entity%> }) => <%=entity%>Adapter.upsertMany(<%=entity%>, { ...state, loading: false }))
);

// tslint:disable-next-line: completed-docs
export function reducer(state: <%=classify(entity)%>State | undefined, action: Action): any {
    return <%=entity%>Reducer(state, action);
}
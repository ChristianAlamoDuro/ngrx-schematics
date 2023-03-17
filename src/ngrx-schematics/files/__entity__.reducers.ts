import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
    get<%=pluralize(classify(entity))%>,
    get<%=pluralize(classify(entity))%>Successfully
} from './<%=entity%>.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface <%=classify(entity)%>State extends EntityState<<%=classify(entity)%>> {
    loading: boolean;
    loadingMessage: string;
}

export const <%=entity%>Adapter: EntityAdapter<<%=classify(entity)%>> = createEntityAdapter<<%=classify(entity)%>>();

export const initialState: <%=classify(entity)%>State = <%=entity%>Adapter.getInitialState({
    loading: false,
    loadingMessage: ''
});

const <%=entity%>Reducer = createReducer(
    initialState,
    on(get<%=pluralize(classify(entity))%>, state => ({ ...state, loading: true })),
    on(get<%=pluralize(classify(entity))%>Successfully, (state, { <%=pluralize(entity)%> }) => <%=entity%>Adapter.upsertMany(<%=pluralize(entity)%>, { ...state, loading: false }))
);

export function reducer(state: <%=classify(entity)%>State | undefined, action: Action): any {
    return <%=entity%>Reducer(state, action);
}
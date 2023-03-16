import { createAction } from '@ngrx/store';

export const get<%= classify(entity) %> = createAction('[<%= entity %>] Get <%= entity %>');

export const get<%= classify(entity) %>Successfully = createAction(
    '[<%= entity %>] Get <%= entity %> successfully',
    props<{ <%= entity %>: <%=classify(entity) %>[] }>()
);
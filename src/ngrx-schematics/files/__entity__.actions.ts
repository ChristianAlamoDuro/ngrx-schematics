import { createAction, props } from '@ngrx/store';

export const get<%=pluralize(classify(entity))%> = createAction('[<%=classify(entity)%>] Get <%=pluralize(entity)%>');

export const get<%=pluralize(classify(entity))%>Successfully = createAction(
    '[<%=classify(entity)%>] Get <%=pluralize(entity)%> successfully',
    props<{ <%=pluralize(entity)%>: <%=classify(entity)%>[] }>()
);
import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { <%=entity%>Adapter, <%=classify(entity)%>State } from './<%=entity%>.reducers';

export const select<%=classify(entity)%>State = createFeatureSelector<<%=classify(entity)%>State>('<%=entity%>');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = <%=entity%>Adapter.getSelectors();

export const selectAll<%=pluralize(classify(entity))%> = createSelector(
    select<%=classify(entity)%>State,
    selectAll
);

export const select<%=classify(entity)%>Entities = createSelector(
    select<%=classify(entity)%>State,
    selectEntities
);

export const select<%=classify(entity)%> = createSelector(
    select<%=classify(entity)%>Entities,
    (<%=pluralize(entity)%>: Dictionary<<%=classify(entity)%>>, { <%=entity%>Id }: { <%=entity%>Id: string }) => <%=pluralize(entity)%>[<%=entity%>Id]
);
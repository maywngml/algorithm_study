select fh.flavor
from first_half fh
left outer join july j on fh.flavor = j.flavor
group by j.flavor
order by fh.total_order + sum(j.total_order) desc
limit 3
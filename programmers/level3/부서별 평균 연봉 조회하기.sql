select hd.dept_id, hd.dept_name_en, round(avg(he.sal), 0) as avg_sal
from hr_employees he
left outer join hr_department hd on he.dept_id = hd.dept_id
group by hd.dept_id
order by round(avg(he.sal), 1) desc 